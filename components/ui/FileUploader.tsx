'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto px-4">
      <div
        {...getRootProps()}
        className={`p-10 mt-10 w-full max-w-4xl h-96 rounded-lg flex items-center justify-center text-center cursor-pointer
          border-2 text-sky-700 transition-all duration-200 ease-in-out
          ${isDragActive ? 'border-sky-500 border-solid bg-sky-50' : 'border-sky-700 border-dashed hover:border-solid hover:border-sky-600 hover:bg-sky-50'}`}
      >
        <input {...getInputProps()} />

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isDragActive ? 1.1 : 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col items-center justify-center gap-3"
        >
          {isDragActive ? (
            <>
              <Inbox className="w-12 h-12 text-sky-500" />
              <p className="font-medium">Drop the files here ...</p>
            </>
          ) : (
            <>
              <Upload className="w-12 h-12 text-sky-700" />
              <p className="font-medium">
                Drag &apos;n&apos; drop some files here, or click to select files
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default FileUploader;
