import { Button } from "@/components/ui/button";
import StartImage from "@/assets/start-image.png";

const Start = () => {
  return (
    <div className="bg-black h-screen flex flex-row justify-center items-center	">
      <div className="flex flex-col gap-5">
        <p className="text-white font-sora text-[20px]">
          nilton<span className="text-violet-700	font-sora-bold">Bank</span>
        </p>

        <div>
          <p className="text-white text-[50px] font-sora">
            Analise, junte
            <br /> e tenha controle <br />
            de todas suas finanças!
          </p>
          <p className="font-sora text-violet-700">rápido e seguro</p>
        </div>

        <Button>Iniciar</Button>
      </div>

      <img src={StartImage} alt="finanças" className="h-3/4" />
    </div>
  );
};

export default Start;
