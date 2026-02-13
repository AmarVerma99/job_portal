import React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FilterCard = () => {
  return (
    <Card className="p-4 w-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Filter Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location */}
        <div>
          <h3 className="font-bold mb-2">Location</h3>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="delhi" id="delhi" />
              <Label htmlFor="delhi">Delhi NCR</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noida" id="noida" />
              <Label htmlFor="noida">Noida</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pune" id="pune" />
              <Label htmlFor="pune">Pune</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mumbai" id="mumbai" />
              <Label htmlFor="mumbai">Mumbai</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-bold mb-2">Industry</h3>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="frontend" id="frontend" />
              <Label htmlFor="frontend">Frontend Developer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="backend" id="backend" />
              <Label htmlFor="backend">Backend Developer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fullstack" id="fullstack" />
              <Label htmlFor="fullstack">Fullstack Developer</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Salary */}
        <div>
          <h3 className="font-bold mb-2">Salary</h3>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-40k" id="0-40k" />
              <Label htmlFor="0-40k">0 - 40k</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="42k-1lakh" id="42k-1lakh" />
              <Label htmlFor="42k-1lakh">42k - 1 Lakh</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1-5lakh" id="1-5lakh" />
              <Label htmlFor="1-5lakh">1 Lakh - 5 Lakh</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default FilterCard
