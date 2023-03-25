import { FaEye, FaLink, FaStar } from 'react-icons/fa'
import { TbGitFork } from "react-icons/tb";
import { VscIssues } from "react-icons/vsc";

import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo
// console.log(stargazers_count)
  return (
    <div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-2 badge  badge-lg bg-[#161B22]'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className={`${forks >= 1 && 'text-green-500'} mr-2 badge badge-lg`}>
            <TbGitFork className='mr-2' /> {forks}
          </div>
          <div className={`${stargazers_count >= 1 && 'text-amber-500'} mr-2 badge  badge-lg`}>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className={`${open_issues >= 1 && 'text-red-700'} mr-2 badge  badge-lg`}>
            <VscIssues className='mr-2' /> {open_issues}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
