import { getProgramMetadata } from "@gear-js/api";
import { useAccount, useAlert, useApi } from "@gear-js/react-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { api } = useApi();
  const alert = useAlert();

  const [fullState, setFullState] = useState({ balances: [] });

  const userProperty = "decodedAddress";
  const accountDecodedAddress = account![userProperty];

  // Add your programID
  const programId =
    "0x6ce32ef08ff5c1120f505a0e323c18979efc65b756ab8e35e2e4194a5b6dce16";

  // Add your meta.txt
  const meta =
    "0100000000000103000000010700000000000000000108000000a90b3400081466745f696f28496e6974436f6e66696700000c01106e616d65040118537472696e6700011873796d626f6c040118537472696e67000120646563696d616c73080108753800000400000502000800000503000c081466745f696f204654416374696f6e000118104d696e74040010011075313238000000104275726e040010011075313238000100205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380002001c417070726f7665080108746f14011c4163746f724964000118616d6f756e74100110753132380003002c546f74616c537570706c790004002442616c616e63654f66040014011c4163746f724964000500001000000507001410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001801205b75383b2033325d0000180000032000000008001c081466745f696f1c46544576656e74000110205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380000001c417070726f76650c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380001002c546f74616c537570706c790400100110753132380002001c42616c616e63650400100110753132380003000020081466745f696f3c496f46756e6769626c65546f6b656e00001801106e616d65040118537472696e6700011873796d626f6c040118537472696e67000130746f74616c5f737570706c791001107531323800012062616c616e6365732401505665633c284163746f7249642c2075313238293e000128616c6c6f77616e6365732c01905665633c284163746f7249642c205665633c284163746f7249642c2075313238293e293e000120646563696d616c730801087538000024000002280028000004081410002c00000230003000000408142400";

  const metadata = getProgramMetadata(`0x${meta}`);

  api.programState
    .read({ programId }, metadata)
    .then((result) => {
      setFullState(result.toJSON() as any);
    })
    .catch(({ message }: Error) => alert.error(message));

  let tokenBalance: number = 0;
  const property = "balances";
  const balancesArray: any[] = fullState![property];
  balancesArray.forEach((user, index) => {
    if (user[0] === accountDecodedAddress) {
      [, tokenBalance] = balancesArray[index];
    }
  });

  return (
    <section className="w-100">
      <div className="align-items-center py-3 h-100">
        <div className="row justify-content-center align-items-center">
          <div className=" m-4 w-50">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="Design_user">
                  <img
                    src="icon_user.png"
                    alt="User"
                    style={{ width: "20%" }}
                  />
                  <h5>{account?.meta.name}</h5>
                  <p>Level 1</p>
                  <i className="far fa-edit mb-5" />
                </div>
                <div className="justify-content-center">
                  <div className="card-body p-2">
                    <div className="card-text" style={{ alignItems: "center" }}>
                      <div>
                        <h6>Account Address:</h6>
                        <p className="text-muted">{account?.address}</p>
                      </div>
                    </div>
                    <h6 className="pt-3">Information</h6>
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Token Balance:</h6>
                        <p className="text-muted">{`${tokenBalance}`}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Platform:</h6>
                        <p className="text-muted">{account?.meta.source}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn_back"
          onClick={() => navigate("/Principal")}
        >
          Back
        </button>
      </div>
    </section>
  );
}

export { Perfil };
