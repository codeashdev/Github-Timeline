import githubSVG from "./assets/github.svg"

const Spinner = () => {
  return (
    <div className='mt-20'>
      <img
        width={150}
        className='text-center mx-auto'
        src={githubSVG}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner
