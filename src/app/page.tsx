"use client";
import dynamic from "next/dynamic";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-image-editor-q";

export default function Home() {
  return (
    <div>
      <FilerobotImageEditor
        previewPixelRatio={2}
        savingPixelRatio={2}
        source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
        onSave={(editedImageObject, designState) =>
          console.log("saved", editedImageObject, designState)
        }
        onClose={() => {}}
        annotationsCommon={{
          fill: "#ff0000",
        }}
        Text={{ text: "Filerobot..." }}
        Rotate={{ angle: 90, componentType: "slider" }}
        defaultTabId={TABS.ANNOTATE}
        defaultToolId={TOOLS.TEXT}
        tabsIds={[
          TABS.ADJUST,
          TABS.FINETUNE,
          TABS.FILTERS,
          TABS.WATERMARK,
          TABS.ANNOTATE,
        ]}
      />
    </div>
  );
}
