import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function Techno({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) => (
    <div>
      <img src={image.url} alt={description} width="100%" />
    </div>
  )

  const openPost = (id) => {
    history.push(`/techno/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    
    return (
      <Col span={12} md={6} key={`techno-${index}`}>
        <article onClick={() => openPost(id)}>
           <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p dangerouslySetInnerHTML={createMarkup(description)} />
          {image.url && renderImg({ image, description })}
        </article>
      </Col>
    )
  }



  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  )
}

Techno.defaultProps = {
  values: []
}

Techno.propTypes = {
  values: PropTypes.array.isRequired
}


export default memo(Techno)