import React from 'react'

export default function AnswerDetails({details, answer}) {
  return (
    <div>
 <details>
  <summary>Check Answer and Details</summary>
  <h3>Correct Answer : {answer}</h3>
  <h3>Details : {details}</h3>
</details>

    </div>
  )
}
