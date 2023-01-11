import { Box, Button, HStack } from '@chakra-ui/react'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(items / pageSize)

  if (pageCount === 1) return null
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <Box>
      <HStack justify={'center'} wrap={'wrap'} gap={2}>
        {pages.map(page => (
          <Button
            key={page}
            variant={'outline'}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
            colorScheme="red"
          >
            {page}
          </Button>
        ))}
      </HStack>
    </Box>
  )
}

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}

export default Pagination
