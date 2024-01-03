import CustomTextAreaInput from "@/components/CustomTextAreaInput";
import TextFieldInput from "@/components/TextFieldInput";
import { Form, Formik } from "formik";
import { PostAddImages } from "./AddImage";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddPost } from "@/lib/api/posts";
import { useSelector } from "react-redux";
import Image from "next/image";
import { ImageCard } from "./ImageCard";

type Props = {
  setOpen: any;
};
function AddPostRoot({ setOpen }: Props) {
  const [post, setPost] = useState("");
  const [files, setFiles] = useState();
  const userSqlData = useSelector((state) => state.users.userSqlData);

  const queryClient = useQueryClient();

  const addMutation = useMutation((data) => AddPost(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(`posts`);
    },
  });

  const handleAdd = async (newItem) => {
    addMutation.mutate(newItem);
  };
  return (
    <div>
      <Formik
        initialValues={{
          content: "",
        }}
        onSubmit={() =>
          handleAdd({
            content: post,
            image_public_id: files?.[0],
            id: userSqlData?.id,
          }).then(() => {
            setOpen(false);
          })
        }>
        <Form>
          <div className="flex flex-col gap-5 mt-10">
            {!files && <PostAddImages setFiles={setFiles} />}

            {files && <ImageCard public_id={files} remove={() => {
              setFiles(undefined)
            }} />}

            <CustomTextAreaInput
              label="Message"
              classes="h-[150px]"
              placeholder="Feel free!!!"
              name="message"
              onChange={(e) => setPost(e.target.value)}
            />

            <div className="mt-10">
              <button
                type="submit"
                className="bg-yellow1 py-2 px-20 font-semibold rounded-md shadow-md text-white">
                Post
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddPostRoot;
