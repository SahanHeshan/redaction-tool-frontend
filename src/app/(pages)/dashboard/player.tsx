import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

interface VideoPlayerProps {
  seekTo: number | null;
}

export function VideoPlayer({ seekTo }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeInput, setTimeInput] = useState<string>("");

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
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-8">
      <video
        ref={videoRef}
        controls
        poster="/vercel.svg"
        className="w-auto max-h-[480px] rounded-lg"
      >
        <Skeleton />
        <source
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex max-w-sm items-center space-x-2">
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
