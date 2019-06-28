import { Box } from '@rebass/grid'

export default ({ children, ...props }: any) => {
  return (
    <Box p={3} as="section" {...props}>
      {children}
    </Box>
  )
}
