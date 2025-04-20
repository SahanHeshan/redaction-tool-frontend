import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const initialResults = [
  { id: "LEAK001", from: 12.3, to: 18.7, typeOfLeak: "Face", action: "blur" },
  {
    id: "LEAK002",
    from: 35.0,
    to: 40.2,
    typeOfLeak: "License Plate",
    action: "cut",
  },
  {
    id: "LEAK003",
    from: 58.4,
    to: 60.0,
    typeOfLeak: "Email Address",
    action: "blur",
  },
  {
    id: "LEAK004",
    from: 72.0,
    to: 72.5,
    typeOfLeak: "Phone Number",
    action: "blur",
  },
  {
    id: "LEAK005",
    from: 90.0,
    to: 92.1,
    typeOfLeak: "Home Address",
    action: "cut",
  },
  {
    id: "LEAK006",
    from: 102.3,
    to: 103.0,
    typeOfLeak: "Unintended Screen Capture",
    action: "ignore",
  },
];

export function ResultTable({ onView }: { onView: (time: number) => void }) {
  const [results, setResults] = useState(initialResults);

  const handleActionChange = (id: string, newAction: string) => {
    setResults((prev) =>
      prev.map((r) => (r.id === id ? { ...r, action: newAction } : r))
    );
  };

  return (
    <Table>
      <TableCaption>A list of your leaked results.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Type of Leak</TableHead>
          <TableHead className="text-left">Action</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result) => (
          <TableRow key={result.id}>
            <TableCell className="font-medium">{result.id}</TableCell>
            <TableCell>{result.from}</TableCell>
            <TableCell>{result.to}</TableCell>
            <TableCell>{result.typeOfLeak}</TableCell>
            <TableCell>
              <RadioGroup
                defaultValue={result.action}
                onValueChange={(value) => handleActionChange(result.id, value)}
                className="flex gap-4"
              >
                {["blur", "cut", "ignore"].map((val) => (
                  <div className="flex items-center space-x-2" key={val}>
                    <RadioGroupItem value={val} id={`${result.id}-${val}`} />
                    <label htmlFor={`${result.id}-${val}`}>{val}</label>
                  </div>
                ))}
              </RadioGroup>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" onClick={() => onView(result.from)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Submit the Action List</TableCell>
          <TableCell className="text-right">
            <Button
              className="bg-gradient-to-r  from-blue-600 to-green-500 text-white"
              onClick={() => console.log(results)}
            >
              Submit
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
