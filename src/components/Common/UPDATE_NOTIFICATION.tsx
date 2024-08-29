import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { checkUpdate } from "../../backend/checkUpdate";
import tauriPackage from "../../../src-tauri/tauri.conf.json";

const UPDATE_NOTIFICATION = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkFn = async () => {
      const res = await checkUpdate();
      const currentVersion = `v${tauriPackage.package.version}`;

      if (res?.data.tag_name !== currentVersion) {
        setShow(true);
      }
    };

    checkFn();
  }, []);

  return (
    <>
      {show && (
        <div className="fixed top-0 left-0 min-h-[100dvh] min-w-[100vw] bg-[#00000070] flex justify-center items-center z-30">
          <div
            className={`modal w-80 bg-neutral-100 text-black h-32 rounded-xl p-2 flex gap-2 transition-transform z-50`}
          >
            <div
              className={`bg-emerald-700 w-[20%] flex flex-col items-center rounded-xl justify-center text-2xl`}
            >
              <FontAwesomeIcon
                icon={faQuestion}
                className="bg-emerald-300 rounded-full aspect-square p-2 text-emerald-800 font-bold"
              />
            </div>
            <div
              className={`w-[80%] rounded-xl flex flex-col items-center justify-center text-lg border border-emerald-600 text-center`}
            >
              There is a new version of the app
              <div className="text-xl font-bold">
                <a
                  href="https://github.com/DeikuModder/keysaver/releases/latest"
                  target="_blank"
                  className="bg-emerald-500 p-1 px-4 rounded-xl text-black"
                >
                  Download
                </a>
                <button
                  className="p-1 px-4"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UPDATE_NOTIFICATION;
