// TEMPORARY probe — measures whether the substrate bundles here. Not committed.
import { useState } from 'react';
import {
  Button, Card, CardContent, Checkbox, Dialog, DialogContent, DialogTrigger,
  Input, Label, RadioGroup, RadioGroupItem, Textarea, Tooltip, TooltipContent,
  TooltipProvider, TooltipTrigger, Hanzo, Toaster,
} from '@hanzo/ui';

export function Probe() {
  const [v, setV] = useState('');
  return (
    <Hanzo>
      <TooltipProvider delay={0}>
        <Toaster />
        <Button variant="outline" size="lg" onClick={() => setV('x')}>go</Button>
        <Card>
          <CardContent>
            <Label htmlFor="a">A</Label>
            <Input id="a" value={v} onChange={(e) => setV(e.target.value)} />
            <Textarea value={v} rows={3} onChange={(e) => setV(e.target.value)} />
            <Checkbox id="c" onCheckedChange={(c) => setV(String(c))} />
            <RadioGroup value={v} onValueChange={setV}>
              <RadioGroupItem value="one" id="one" />
            </RadioGroup>
          </CardContent>
        </Card>
        <Dialog>
          <DialogTrigger asChild><Button>open</Button></DialogTrigger>
          <DialogContent>hi</DialogContent>
        </Dialog>
        <Tooltip>
          <TooltipTrigger asChild><span>t</span></TooltipTrigger>
          <TooltipContent>tip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Hanzo>
  );
}
