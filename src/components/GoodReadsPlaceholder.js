import React from "react"
import ContentLoader from "react-content-loader"

const Placeholder = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={220}
    viewBox="0 0 400 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="106" rx="3" ry="3" width="50" height="6" /> 
    <rect x="3" y="122" rx="3" ry="3" width="380" height="6" /> 
    <rect x="4" y="0" rx="0" ry="0" width="65" height="83" /> 
    <rect x="4" y="142" rx="3" ry="3" width="50" height="6" /> 
    <rect x="4" y="161" rx="3" ry="3" width="380" height="6" /> 
    <rect x="5" y="175" rx="3" ry="3" width="380" height="6" />
  </ContentLoader>
)

export default Placeholder