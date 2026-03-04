import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiOptions, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    fileBuffer: Buffer,
    options?: UploadApiOptions,
  ): Promise<string> {
    try {
      const folder =
        options?.folder ?? process.env.CLOUDINARY_FOLDER ?? 'shelfie/books';

      const result = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'image',
              folder,
              ...options,
            },
            (error, uploadResult) => {
              if (error || !uploadResult) {
                return reject(error ?? new Error('Upload failed'));
              }
              resolve(uploadResult);
            },
          );

          uploadStream.end(fileBuffer);
        },
      );

      return result.secure_url;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al subir imagen a Cloudinary',
      );
    }
  }
}

