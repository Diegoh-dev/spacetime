"use client";

import { url } from "inspector";
import { ChangeEvent, useState } from "react";

export default function MediaPicker() {
  const [preview,setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {

    const {files} = event.target

    if(!files){
      return
    }

    const previewURL =  URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        accept="image/*"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
      />

      {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover"/>}

      {/* fazer o preview do video */}
    </>
  );
}

// use client => enviar o javascript para o navegador nesse caso apenas esse componente
