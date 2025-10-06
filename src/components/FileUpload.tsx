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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 2rem;
`;

const DropzoneContainer = styled.div<{ $isDragActive: boolean; $hasFiles: boolean }>`
  border: 2px dashed ${({ theme, $isDragActive }) => 
    $isDragActive ? theme.colors.primary : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme, $isDragActive }) => 
    $isDragActive ? theme.colors.primaryLight : 'transparent'};
  margin-bottom: ${({ $hasFiles }) => ($hasFiles ? '2rem' : '0')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const UploadIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const DropzoneText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const FileTypes = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const FilesList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  
  &:last-child {
    border-bottom: none;
  }
`;

const FileInfo = styled.div`
  flex: 1;
`;

const FileName = styled.p`
  font-weight: 500;
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 1.5rem;
  font-size: 0.9rem;
  white-space: pre-line;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.1em;
  }
`;

const ResetButton = styled.button`
  margin: 1.5rem auto 0;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
  }
`;

