import { formatDateToIndonesian } from '@core/libs/helpers';
import { convertSize } from '@features/_global/helper';
import { useUserCurrentRole } from '@features/_global/hooks';
import { autorities } from '@features/_global/types';
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  toast,
  useMediaQuery
} from '@hudoro/admin';
import { useRef, useState } from 'react';

interface IInputFile {
  supportFile: string[];
  handleFileChange: (files: FileList | null) => void;
  selectedFile?: {
    size: string;
    name: string;
  }[];
  isMultiple?: boolean;
  handleDeleteSelectedFile?: (index?: string | number) => void;
  errorMessage?: string | string[];
  isLoading?: boolean;
  onClickFileHandler?: () => void;
  fileDate?: string;
}

const InputFile = ({
  supportFile,
  handleFileChange,
  selectedFile = [],
  errorMessage,
  handleDeleteSelectedFile,
  isMultiple = false,
  onClickFileHandler,
  fileDate
}: IInputFile) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { role } = useUserCurrentRole();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handlerDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('hello');
    setIsDragging(true);
  };

  const handlerDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClickBox = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    if (role !== autorities.ROLE_ADMIN) {
      toast.danger('Anda tidak memiliki akses');
    }
  };

  const getBorderColor = (errorMessage?: string | string[]): string => {
    if (typeof errorMessage === 'string' && errorMessage) {
      return 'var(--hsd-ui-color-error)';
    }
    if (Array.isArray(errorMessage) && errorMessage.length > 0) {
      return 'var(--hsd-ui-color-error)';
    }
    return 'var(--hsd-ui-text-disable)';
  };

  const mobile = useMediaQuery('md');
  return (
    <>
      {role === autorities.ROLE_ADMIN && (
        <input
          type="file"
          style={{ display: 'none' }}
          ref={inputRef}
          multiple={isMultiple}
          onChange={e => handleFileChange(e.target.files)}
          accept={supportFile
            ?.map(extension => '.' + extension.toLowerCase())
            .join(', ')}
        />
      )}
      <Box
        fullWidth
        style={{ minHeight: '69px' }}
        borderRadius="rounded-base"
        display="flex"
        justify="center"
        align="center"
        cursor="pointer"
        gap="md"
      >
        {selectedFile.length > 0 ? (
          selectedFile?.map((item, idx) => (
            <Box
              key={idx}
              width="width-full"
              paddingInline="md"
              height="height-full"
              direction="row"
              justify="space-between"
              align="center"
              onClick={onClickFileHandler}
              fullHeight
              paddingBlock="md"
              id="file-item"
              borderRadius="rounded-base"
            >
              <Flex direction="row" align="center" gap="sm">
                <Icon
                  name="DocumentFilled"
                  size="lg"
                  style={{ color: 'var(--hsd-ui-color-primary)' }}
                />
                <Flex>
                  <Text
                    fontWeight="bold"
                    style={{
                      maxWidth: '200px',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden'
                    }}
                  >
                    {item.name}
                  </Text>
                  <Flex direction="row" gap="xs" align="center">
                    <Text fontSize="sm" fontWeight="medium">
                      {`${convertSize(item.size ?? '100000')}`}
                    </Text>
                    <Icon name="Dot" size="xs" />
                    <Text fontSize="sm" fontWeight="medium">
                      {fileDate ? fileDate : formatDateToIndonesian(new Date())}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              {role === autorities.ROLE_ADMIN && (
                <Button
                  size="xs"
                  secondary
                  type="button"
                  onClick={event => {
                    event.stopPropagation();
                    handleDeleteSelectedFile && handleDeleteSelectedFile(idx);
                  }}
                >
                  <Icon name="Trash1" size="md" style={{ color: '#C9184A' }} />
                </Button>
              )}
            </Box>
          ))
        ) : (
          <Box
            width="width-full"
            paddingInline="md"
            direction="row"
            gap="sm"
            align="center"
            onClick={handleClickBox}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handlerDragEnter}
            onDragLeave={handlerDragLeave}
            paddingBlock="md"
            borderRadius="rounded-base"
            // customBorder={
            //   isDragging
            //     ? '1px solid var(--hsd-ui-color-info)'
            //     : `1px solid ${getBorderColor(errorMessage)}`
            // }
            style={{
              border: isDragging
                ? '1px solid var(--hsd-ui-color-info)'
                : `1px solid ${getBorderColor(errorMessage)}`
            }}
          >
            <Icon name="Upload" size="lg" />
            <Flex gap="xs">
              <Flex direction="row" gap="xs">
                <Text
                  fontWeight="medium"
                  color="gray-500"
                  style={{ textWrap: 'nowrap' }}
                  fontSize={mobile ? 'md' : 'sm'}
                >
                  Click your upload
                </Text>
                <Text
                  fontWeight="medium"
                  style={{ textWrap: 'nowrap' }}
                  fontSize={mobile ? 'md' : 'sm'}
                >
                  or Drag & Drop
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray-500">
                {supportFile
                  ?.map(extension => extension.toLocaleUpperCase())
                  .join(', ')}
              </Text>
            </Flex>
          </Box>
        )}
      </Box>
      {typeof errorMessage === 'string' && errorMessage && (
        <Text color="error" fontSize="xs">
          {errorMessage}
        </Text>
      )}

      {Array.isArray(errorMessage) &&
        errorMessage.length > 0 &&
        errorMessage.map((item, index) => (
          <Text key={index} color="error" fontSize="xs">
            {item}
          </Text>
        ))}
    </>
  );
};

export default InputFile;
