import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoPlayerProps {
  seekTo: number | null;
  videoURL: string | null;
}

export function VideoPlayer({ seekTo, videoURL }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeInput, setTimeInput] = useState<string>("");

  // Seek handling remains unchanged.
  useEffect(() => {
    if (seekTo !== null && videoRef.current) {
      videoRef.current.currentTime = seekTo;
    }
  }, [seekTo]);

  const handleSeek = () => {
    const seconds = parseFloat(timeInput);
    if (videoRef.current && !isNaN(seconds)) {
      videoRef.current.currentTime = seconds;
    }
  };

  useEffect(() => {
    if (videoRef.current && videoURL) {
      videoRef.current.load();
    }
  }, [videoURL]);

  return (
    <div className="flex flex-col  gap-4 ">
      <video
        ref={videoRef}
        controls
        className="md:max-h-[360px] md:min-w-[640px] max-w-full rounded-lg"
        poster="/cover.svg"
      >
        <source
          src={
            videoURL ?? "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex space-x-2">
        <Input
          type="number"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
          placeholder="Enter time in seconds"
        />
        <Button onClick={handleSeek}>Go</Button>
      </div>
    </div>
  );
}
