"use client";
import * as React from "react";
import { useState } from "react";
import { UploadDrawer } from "@/components/upload-drawer";
import { DownloadDrawer } from "@/components/download-drawer";
import { ResultTable } from "./result";
import { VideoPlayer } from "./player";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function DashBoard() {
  const [seekTime, setSeekTime] = useState<number | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);

  return (
    <section className="bg-zinc-50 pt-16 md:pt-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-7xl px-6">
        <div className="flex h-auto items-top  justify-center p-6">
          <VideoPlayer seekTo={seekTime} videoURL={videoURL} />
        </div>

        <ResizablePanelGroup
          direction="vertical"
          className="max-h-auto rounded-lg border min-h-[640px]"
        >
          <ResizablePanel maxSize={10} minSize={10}>
            <div className="flex h-auto items-center justify-left p-3 gap-3">
              <UploadDrawer setVideoURL={setVideoURL} />
              <DownloadDrawer />
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={90} minSize={60} className="p-10">
            <ResultTable onView={(time) => setSeekTime(time)} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </section>
  );
}
