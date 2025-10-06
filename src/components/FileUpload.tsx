import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { FiUpload, FiX, FiCheck } from 'react-icons/fi';

export const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter for image files
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
    
    try {
      // Simulate file processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUploadComplete(true);
    } catch (error) {
      console.error('Error processing files:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.tiff', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
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
          <UploadIcon />
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

        {uploadComplete && (
          <SuccessMessage>
            <FiCheck />
            <span>Metadata successfully removed! Your files are ready to download.</span>
          </SuccessMessage>
        )}
      </Container>
    </UploadSection>
  );
};

const UploadSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`;

const DropzoneContainer = styled.div<{ $isDragActive: boolean; $hasFiles: boolean }>`
  border: 2px dashed 
    ${({ theme, $isDragActive }) => 
      $isDragActive ? theme.colors.accent : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme, $isDragActive }) => 
    $isDragActive ? 'rgba(255, 199, 167, 0.1)' : theme.colors.secondary};
  margin-bottom: ${({ $hasFiles }) => ($hasFiles ? '2rem' : '0')};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: rgba(255, 199, 167, 0.1);
  }
`;

const UploadIcon = styled(FiUpload)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const DropzoneText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
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
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
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
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textLight};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: rgba(72, 187, 120, 0.1);
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 2rem;
  font-weight: 500;
  
  svg {
    font-size: 1.25rem;
  }
`;
