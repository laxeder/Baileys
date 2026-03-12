declare module 'music-metadata' {
	export type IAudioMetadata = any
	export function parseFile(filePath: string): Promise<IAudioMetadata>
	export function parseBuffer(buffer: Buffer, fileType?: string, options?: any): Promise<IAudioMetadata>
    export function parseFile(filePath: string, options?: any): Promise<IAudioMetadata>
    export function parseStream(stream: NodeJS.ReadableStream, fileType?: string, options?: any): Promise<IAudioMetadata>
}
