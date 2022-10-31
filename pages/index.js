import { useRef, useState } from "react";
export async function getStaticProps() {
  let a = Math.round(Math.random() * (20 - 1) + 1);
  let b = Math.round(Math.random() * (20 - 1) + 1);
  return {
    props: {
      a, b
    },
  };
}

export default function Home({ a, b }) {
  const [stageOne, setStageOne] = useState(a)
  const [stageTwo, setStageTwo] = useState(b)
  const [status, setStatus] = useState(null)
  const inputRef = useRef()
  const VerifyHandler = (event) => {
    event.preventDefault()
    if(Number(inputRef.current.value) === a+b){
      setStatus("Matched")
    }
    else{
      setStatus("Not matched")
    }

  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 rounded-lg">
        <div>
          <p>{stageOne} + {stageTwo} = ?</p>

        </div>

        <form onSubmit={VerifyHandler}>
          <input type="text" ref={inputRef} placeholder="Enter Answer" className="input w-full max-w-xs text-black" />
          {
            status && <p className={`my-2 ${status == 'Matched' ? 'text-green-700': "text-red-700"}`}>{status}</p>
          }
          <input type="submit" className="btn btn-primary" value="Verify" />

        </form>
      </div>

    </div>
  )
}
