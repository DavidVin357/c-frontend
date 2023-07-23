/** @jsxImportSource theme-ui */

import { Box, Heading } from 'theme-ui'
import { LuCopy, LuCopyCheck } from 'react-icons/lu'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Code from './Code'
import { useState } from 'react'

interface PropsTypes {
  title: string
  code: string
}
const CodeExample = ({ code, title }: PropsTypes) => {
  const [isCopied, setCopied] = useState(false)

  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Heading as='h3' mb={2} color='#64074D'>
        {title}
      </Heading>
      <CopyToClipboard text={code} onCopy={copy}>
        {isCopied ? (
          <LuCopyCheck
            sx={{
              alignSelf: 'end',
              position: 'absolute',
              left: '95%',
              top: '55px',
              zIndex: 2,
              cursor: 'pointer',
            }}
          />
        ) : (
          <LuCopy
            sx={{
              alignSelf: 'end',
              position: 'absolute',
              left: '95%',
              top: '55px',
              zIndex: 2,
              cursor: 'pointer',
            }}
          />
        )}
      </CopyToClipboard>

      <Code
        code={code}
        onChange={() => {}}
        style={{
          borderRadius: '15px',
          fontSize: 11,
          borderColor: '#64074D',
        }}
      />
    </Box>
  )
}

export default CodeExample
