import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { FiUpload, FiX, FiCheck, FiDownload } from 'react-icons/fi';

export const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processedFiles, setProcessedFiles] = useState<{ url: string; name: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageFiles = acceptedFiles.filter(file =>
      file.type.match('image.*')
    );
    setFiles(prevFiles => [...prevFiles, ...imageFiles]);
  }, []);

  const removeFile = (fileName: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const processFiles = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    setError(null);

    try {
      const processed = [];

      for (const file of files) {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const img = new Image();

          const imgLoadPromise = new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error('Failed to load image'));
          });

          const url = URL.createObjectURL(new Blob([arrayBuffer], { type: file.type }));
          img.src = url;

          await imgLoadPromise;

          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Failed to get canvas context');

          ctx.drawImage(img, 0, 0);

          const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob((blob) => resolve(blob), file.type, 0.92);
          });

          if (!blob) throw new Error('Failed to process image');

          const fileName = file.name.replace(/\.(jpe?g|png|webp|tiff?)$/i, '_clean$&');
          const processedUrl = URL.createObjectURL(blob);

          processed.push({
            url: processedUrl,
            name: fileName
          });

          URL.revokeObjectURL(url);

        } catch (err) {
          console.error(`Error processing ${file.name}:`, err);
          setError(prev =>
            prev ? `${prev}\nFailed to process ${file.name}` : `Failed to process ${file.name}`
          );
        }
      }

      setProcessedFiles(processed);
      setUploadComplete(true);

    } catch (error) {
      console.error('Error processing files:', error);
      setError('An error occurred while processing your files. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.tiff', '.webp']
    },
    maxSize: 10 * 1024 * 1024,
  });

  return (
    <UploadSection id="upload">
      <Container>
        <SectionTitle>Upload Your Images</SectionTitle>
        <SectionSubtitle>Drag & drop your images here, or click to select files</SectionSubtitle>

        <DropzoneContainer
          {...getRootProps()}
          $isDragActive={isDragActive}
          $hasFiles={files.length > 0}
        >
          <input {...getInputProps()} />
          <UploadIcon>
            <FiUpload />
          </UploadIcon>
          <DropzoneText>
            {isDragActive
              ? 'Drop the files here...'
              : 'Drag & drop images here, or click to select files'}
          </DropzoneText>
          <FileTypes>Supports: JPG, PNG, TIFF, WEBP (Max 10MB)</FileTypes>
        </DropzoneContainer>

        {files.length > 0 && (
          <FilesList>
            {files.map((file) => (
              <FileItem key={file.name}>
                <FileInfo>
                  <FileName>{file.name}</FileName>
                  <FileSize>{(file.size / 1024 / 1024).toFixed(2)} MB</FileSize>
                </FileInfo>
                <RemoveButton onClick={() => removeFile(file.name)}>
                  <FiX />
                </RemoveButton>
              </FileItem>
            ))}
          </FilesList>
        )}

        {files.length > 0 && !uploadComplete && (
          <ActionButton
            onClick={processFiles}
            disabled={isUploading}
          >
            {isUploading ? 'Processing...' : 'Remove Metadata'}
          </ActionButton>
        )}

        {error && (
          <ErrorMessage>
            <FiX />
            <span>{error}</span>
          </ErrorMessage>
        )}

        {uploadComplete && (
          <>
            <SuccessMessage>
              <FiCheck />
              <span>Metadata successfully removed! Your files are ready to download.</span>
            </SuccessMessage>

            <DownloadButtons>
              {processedFiles.map((file, index) => (
                <DownloadButton key={index} href={file.url} download={file.name}>
                  <FiDownload />
                  Download {file.name}
                </DownloadButton>
              ))}
            </DownloadButtons>

            <ResetButton
              onClick={() => {
                setFiles([]);
                setProcessedFiles([]);
                setUploadComplete(false);
                processedFiles.forEach(file => URL.revokeObjectURL(file.url));
              }}
            >
              Process More Files
            </ResetButton>
          </>
        )}
      </Container>
    </UploadSection>
  );
};

// Styled Components
const UploadSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2.5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const DropzoneContainer = styled.div<{ $isDragActive: boolean; $hasFiles: boolean }>`
  border: 2px dashed ${({ theme, $isDragActive }) =>
    $isDragActive ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 4rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme, $isDragActive }) =>
    $isDragActive ? theme.colors.primary : '#FAFAFA'};
  margin-bottom: ${({ $hasFiles }) => ($hasFiles ? '2rem' : '0')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const UploadIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${DropzoneContainer}:hover & {
    transform: translateY(-5px);
  }
`;

const DropzoneText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

const FileTypes = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  display: block;
  opacity: 0.8;
`;

const FilesList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:last-child {
    border-bottom: none;
  }
`;

const FileInfo = styled.div`
  flex: 1;
`;

const FileName = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.25rem 0;
`;

const FileSize = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.errorLight};
  }
`;

const ActionButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}DD; // Slightly transparent on hover
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textLight};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.5;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 1.5rem;
  font-size: 0.95rem;
  white-space: pre-line;
  border: 1px solid ${({ theme }) => theme.colors.error}20;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 1.5rem;
  font-size: 0.95rem;
  border: 1px solid ${({ theme }) => theme.colors.success}20;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}DD;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  svg {
    font-size: 1.25em;
  }
`;

const ResetButton = styled.button`
  margin: 1.5rem auto 0;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.75rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

