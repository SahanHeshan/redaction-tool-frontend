"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
interface UploadDrawerProps {
  setVideoURL: (url: string) => void;
}

export function UploadDrawer({ setVideoURL }: UploadDrawerProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const blobURL = URL.createObjectURL(file);

      setVideoURL(blobURL);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Upload Video</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Upload a Section</DrawerTitle>
            <DrawerDescription>
              Select what you want to detect
            </DrawerDescription>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </DrawerHeader>

          <div className="p-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="video">Video File</Label>
                <Input
                  id="video"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="p-4" />
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="url">Google Drive URL</Label>
              <Input type="url" id="url" placeholder="URL" />
            </div>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
