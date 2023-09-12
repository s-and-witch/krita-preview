import * as vscode from 'vscode';
import * as jszip from 'jszip';

export async function readKritaUri(uri: vscode.Uri): Promise<string | undefined> {
  const data = vscode.workspace.fs.readFile(uri);
  const zip = await jszip.loadAsync(data);
  const base64 = await zip.file("mergedimage.png")?.async("base64");
  if(base64 === undefined) {return undefined;}
  return `data:image/png;base64,${base64}`;
}
