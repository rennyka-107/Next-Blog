import React, { useEffect, useRef } from "react";

function CkEditor({ onChange, editorLoaded, name, data }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  //   useEffect(() => {
  //     if (editorRef.current) {
  //     //   editorRef.current.CKEditor.on("insertElement", function (event) {
  //     //     var element = event.data;
  //     //     if (element.getName() == "img") {
  //     //       element.addClass("contentimage");
  //     //     }
  //     //   });
  //     // }
  //   }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
        config={{
            autoGrow_maxHeight: 400,
            autoGrow_minHeight: 400,
        }}
          type=""
          name={name}
          editor={ClassicEditor}
          data={data}
          onChange={(event, editor) => {
            const content = editor.getData();
            console.log(event, "a")
            // console.log({ event, editor, data })
            onChange(content);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default CkEditor;
