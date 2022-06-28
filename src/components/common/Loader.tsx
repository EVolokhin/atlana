import React, {FC} from 'react'

export const Loader: FC = () => {
  return (
    <div style={{ height: '40px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Loading ...
    </div>
  )
}
