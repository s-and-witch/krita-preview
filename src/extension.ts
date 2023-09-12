import * as vscode from 'vscode';
import { BinarySizeStatusBarEntry } from './binarySizeStatusBarEntry';
import { registerKritaPreviewSupport } from './kritaPreview';

export function activate(context: vscode.ExtensionContext) {

	const binarySizeStatusBarEntry = new BinarySizeStatusBarEntry();
	context.subscriptions.push(binarySizeStatusBarEntry);

	context.subscriptions.push(registerKritaPreviewSupport(context, binarySizeStatusBarEntry));
}

export function deactivate() {}
