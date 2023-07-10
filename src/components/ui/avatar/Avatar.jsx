import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Navigation, Button } from "..";
import { updatePhoto } from "~/services/auth";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "~/slices/alertSlice";

export const Avatar = ({ size, rounded, photo, className, uploadPhoto }) => {
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setImage(photo);
  }, [photo]);

  const showSize = (size) => {
    switch (size) {
      case "lg":
        return "h-24 w-24";
      case "md":
        return "h-14 w-14";
      default:
        return "h-24 w-24";
        break;
    }
  };

  const showRounded = (rounded) => {
    if (rounded && rounded === "circle") {
      return "rounded-full";
    }
    return "rounded";
  };

  const style = clsx(
    "flex items-center justify-center bg-brand-grey",
    showSize(size),
    showRounded(rounded),
    className,
  );

  const handleChange = (event) => {
    const preview = URL.createObjectURL(event.target.files[0]);
    setImage(event.target.files[0]);
    setPreviewImage(preview);
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const updateProfilePhoto = async () => {
    if (location.pathname == "/account") {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("avatar", image);
        const {
          data: { status, data, message },
        } = await updatePhoto(formData);

        if (status) {
          setImage(previewImage);
          setPreviewImage("");
          dispatch(
            setAlert({
              show: true,
              message: message,
              type: "success",
            }),
          );
        } else {
          dispatch(
            setAlert({
              show: true,
              message: message,
              type: "error",
            }),
          );
        }
      } catch (error) {
        dispatch(
          setAlert({
            show: true,
            message: "Terjadi kesalahan server",
            type: "error",
          }),
        );
      } finally {
        setLoading(false);
      }
    }
  };

  if (previewImage) {
    return (
      <div className="absolute left-0 top-0 z-20 flex min-h-screen w-full flex-col bg-brand-grey">
        <Navigation
          title="Preview Avatar"
          description="Selection your avatar"
          isBack={true}
          handleBack={() => setPreviewImage("")}
        />
        <div className="mt-[26px] flex flex-col gap-3 bg-white p-4">
          <img src={previewImage} width="100%" height={300} alt="preview" />
          <div className="flex gap-3">
            <Button
              color="secondary"
              type="button"
              className="w-full"
              handleClick={() => setPreviewImage("")}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="w-full"
              disabled={loading}
              loading={loading}
              handleClick={updateProfilePhoto}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(className, "relative")}>
      {image ? (
        <img
          src={image}
          className={clsx(
            showSize(size),
            showRounded(rounded),
            "bg-cover object-cover object-center",
          )}
          srcSet={`${image} 300w`}
          sizes="300px"
          loading="lazy"
        />
      ) : (
        <div className={style}>
          <p className="text-sm font-light text-brand-secondary">Add Photo</p>
        </div>
      )}
      {uploadPhoto && (
        <input
          type="file"
          className={clsx(
            showSize(size),
            showRounded(rounded),
            "absolute left-0 top-0 z-10 opacity-0",
          )}
          onChange={(event) => handleChange(event)}
        />
      )}
    </div>
  );
};
