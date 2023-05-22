export default function EmptyMemories(){
  return (
    <div className="flex p-16 flex-1 items-center justify-center">
          <p className=" w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{""}{" "}
            <a target="_blank" rel="noreferrer" href="" className="underline hover:text-gray-50">
              criar agora
            </a>{" "}
            {/* apenas paa subir a versão */}
          </p>
        </div>
  )
}