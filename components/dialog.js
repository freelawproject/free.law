import { useId, useState } from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";

export default function Dialog({ children, extraClasses, isOpen: isOpenProp, setIsOpen: setIsOpenProp }) {
  const dialogId = useId();
  let [isOpenLocal, setIsOpenLocal] = useState(true);
  let isOpen, setIsOpen;
  if (isOpenProp == null || setIsOpenProp == null) {
    [isOpen, setIsOpen] = [isOpenLocal, setIsOpenLocal];
  } else {
    [isOpen, setIsOpen] = [isOpenProp, setIsOpenProp];
  }
  let classes = 'min-h-450px max-h-screen lg:left-1/4 left-0 lg:w-1/2 w-full fixed py-6 px-4';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return (
    <HeadlessDialog
      onClose={() => setIsOpen(false)}
      open={isOpen}
      className='w-full h-full top-0 left-0 fixed z-50 flex justify-center items-center min-w-700px'
      id={dialogId}
    >
      <HeadlessDialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      <div
        className={classes}
      >
        {children}
      </div>
    </HeadlessDialog>
  );
}
