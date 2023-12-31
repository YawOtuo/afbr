import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../index.module.css";
import Image from "next/image";
import { AddMoreImages, AddMoreImagesXl } from "./AddMoreImages";
import BannerImage from "./BannerImage";
import ImageOptionsPopover from "./ImageOptionsPopover";
import { ImageCard } from "./ImageCard";
import { useLocalStorage } from "@uidotdev/usehooks";
import { handleFileDrop, uploadToCloudinary } from "./api";
import axios from "axios";
import { deleteDogImage } from "@/lib/api/dogs";
import { addLocalStorageKey, editLocalStorageKey } from "@/lib/utils/definitions";

type Props = {
  localStorageKey: string;
};
export default function ChooseImages({ localStorageKey }: Props) {
  const [files, setFiles] = useState<any>([]);
  const [dogData, setdogData] = useLocalStorage(localStorageKey);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      handleFileDrop(acceptedFiles, setFiles);
    },
    [setFiles]
  );

  useEffect(() => {
    if (files?.length > 0) {
      setdogData((prev: any) => ({
        ...prev,
        images : files,
 
      }));
    }
  }, [files])

  useEffect(() => {
    if (dogData && localStorageKey==editLocalStorageKey){
      setFiles([dogData?.public_id, ...(Array.isArray(dogData?.public_id_array) ? dogData?.public_id_array : [])]);
    }
    if (dogData && localStorageKey==addLocalStorageKey) {
      setFiles(dogData?.images);
      
    }
  }, [localStorageKey]);

  const remove = (index: any) => {
    deleteDogImage({ public_id: files[index]?.public_id });

    setFiles((previousFiles: any) => {
      const updatedFiles = [...previousFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const makeBannerImage = (index: any) => {
    if (index >= 0 && index < files.length) {
      const fileToMove = files[index];
      const updatedFiles = [...files];

      updatedFiles.splice(index, 1);
      updatedFiles.unshift(fileToMove);
      setFiles(updatedFiles);
    }
  };

  const addCaption = (index: any) => {};

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <form className="w-full flex flex-col items-center justify-center h-full lg:px-24 gap-[2rem]">
        <div className="w-full flex flex-col gap-8 items-start justify-center max-w-[1308px]">
          <div className=" ">
            <p className={`${styles.title} w-fit font-bold text-3xl mt-5`}>
              Choose your dog images
            </p>
            <p className="">
              You can remove or add an image after you publish your listing.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center w-full h-full max-w-[1308px]">
            {files?.length >= 1 && <AddMoreImages setFiles={setFiles} />}
            {(files?.length < 1 || !files) && (
              <div
                {...getRootProps({})}
                className="max-w-[1308px] max-h-[640px] aspect-[1308/640] w-full h-full rounded-[0.47181rem] border-[0.755px] border-[#00000040] flex items-center justify-center">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here</p>
                ) : (
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-[0.8125rem] text-center font-[400] ">
                      Select or drag and drop images here <br /> ( Maximum 4 )
                    </p>
                    <p></p>
                    <p className="text-[#00000066] text-[0.5rem] font-[400]">
                      JPG, PNG file size no more than 10MB
                    </p>
                    <p className="text-[#B4B4B4] box-[1px_3px_13px_0px_rgba(0,0,0,0.10)] border-[1px] border-[#B4B4B4] max-w-[100px] max-h-[38px]  w-full h-[38px] flex items-center justify-center rounded-lg text-[13px]">
                      Select File
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {files?.length >= 1 && (
          <div className="grid grid-cols-3 gap-5 w-full max-w-[1308px]">
            <div className="col-span-3 h-full">
              <BannerImage
                public_id={files?.[0]}
                remove={() => remove(0)}
                makeBannerImage={() => makeBannerImage}
                addCaption={() => addCaption}
              />
            </div>
            {files?.slice(1)?.map((file: any, index: number) => (
              <div className="col-span-3 md:col-span-1" key={index}>
                <ImageCard
                  key={index}
                  public_id={file}
                  remove={() => remove(index + 1)}
                  makeBannerImage={() => makeBannerImage(index + 1)}
                  addCaption={() => addCaption}
                />
              </div>
            ))}
            <div className="col-span-3 md:col-span-1">
              <AddMoreImagesXl setFiles={setFiles} />
            </div>{" "}
          </div>
        )}
      </form>
    </>
  );
}
