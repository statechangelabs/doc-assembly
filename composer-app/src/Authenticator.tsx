import {
  FC,
  useCallback,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import Title from "./Title";
import Topography from "./topography.svg";
const context = createContext({
  token: "",
  isAuthenticated: false,
  logout: () => {},
});
const { Provider } = context;
const POLYDOCS_BASE =
  "https://kdshw9reug.execute-api.us-east-1.amazonaws.com/dev";
const TOKENLIFETIME = 60 * 60 * 1000;
const ethereum = (window as unknown as { ethereum: any }).ethereum;
const provider = ethereum
  ? new ethers.providers.Web3Provider(ethereum)
  : undefined;
const Authenticator: FC<{ children: ReactElement }> = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const localToken = localStorage.getItem("polydocs_token");
    if (localToken) {
      const tokenObj = JSON.parse(atob(localToken));
      const messageObj = JSON.parse(tokenObj.message);
      const exp = new Date(messageObj.exp).valueOf();
      if (exp) {
        if (exp > Date.now()) {
          setToken(localToken);
          setIsAuthenticated(true);
        }
      }
    }
  }, []);
  const authenticate = useCallback(async () => {
    if (!provider) throw new Error("No provider");
    const address = await provider.getSigner().getAddress();
    const message = JSON.stringify(
      {
        type: "Authenticate me to Polydocs",
        exp: new Date(Date.now() + 3600000).toISOString(),
      },
      null,
      2
    );
    const signature = await provider.getSigner().signMessage(message);
    try {
      setIsAuthenticated(true);
      const token = btoa(JSON.stringify({ address, message, signature }));
      setToken(token);
      localStorage.setItem("polydocs_token", token);
      return true;
    } catch (e) {
      toast("Oops! Something went wrong." + (e as Error).toString(), {
        type: "error",
      });
    }
  }, []);
  const logout = useCallback(() => {
    setToken("");
    localStorage.removeItem("polydocs_token");
    setIsAuthenticated(false);
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = useMemo(
    () => ({ isAuthenticated, token, logout }),
    [isAuthenticated, token, logout]
  );
  if (isAuthenticated) return <Provider value={value}>{children}</Provider>;
  else
    return (
      <div
        className="h-screen w-full flex flex-col justify-center items-center"
        style={{ background: `url(${Topography})` }}
      >
        <div className="flex flex-col space-y-8">
          <Title />
          <div className="flex flex-row justify-center">
            <button className="btn btn-gradient" onClick={authenticate}>
              Sign In To Polydocs
            </button>
          </div>
        </div>
      </div>
    );
};
export default Authenticator;
export const useAuthenticator = () => {
  const { isAuthenticated, logout } = useContext(context);
  return { isAuthenticated, logout };
};
const useAuthToken = () => {
  const { token } = useContext(context);
  return token;
};
export const useAuthenticatedFetch = () => {
  const token = useAuthToken();
  return (async (path: string, info: RequestInit = {}) => {
    const res = await fetch(POLYDOCS_BASE + path, {
      headers: {
        ...(info.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
    //check response status
    if (res.status === 401) {
      //Yer outta here
      toast("Authentication problem: try logging in again", { type: "error" });
      logout();
    } else {
      return res;
    }
  }) as typeof fetch;
};
function logout() {
  throw new Error("Function not implemented.");
}