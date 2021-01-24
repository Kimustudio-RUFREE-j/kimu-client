import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import signupState from '@/context/signup';

import { containerCss } from '@/styles/common';
import { signupCss } from '@/styles/auth';

interface Issue {
  id: number;
  title: string;
  checked?: boolean;
}

export default function PickIssues() {
  const [signup, setSignup] = useRecoilState(signupState);
  let issues: Issue[] = [
    { id: 0, title: `장애인` },
    { id: 1, title: `장애인` },
    { id: 2, title: `장애인` },
    { id: 3, title: `장애인` },
    { id: 4, title: `장애인` },
    { id: 5, title: `장애인` },
  ];
  issues = issues.map((issue) => ({ ...issue, checked: false }));
  const [pickIssues, setPickIssues] = useState<Issue[]>(issues);

  const onClickPickIssue = (data: Issue) => {
    setPickIssues(
      pickIssues.map((issue) =>
        issue.id === data.id ? { ...issue, checked: !issue.checked } : issue,
      ),
    );
  };

  // if (pickIssues.includes(data)) {
  //   setPickIssues(pickIssues.filter((issue) => issue.id !== data.id));
  // } else {
  //   setPickIssues([...pickIssues, data]);
  // }

  return (
    <div css={[containerCss, signupCss]}>
      <div className="signup-wrap pick-issue">
        <h2 className="signup-header pick-issue-header">
          여러분이 관심 있는 사회 이슈로
          <br />
          아트워크를 준비해 볼게요 :)
        </h2>
        <span className="pick-issue-subtitle">
          관심 사회 이슈를 3개 이상 선택해주세요.
        </span>
        <ul className="pick-issue-container">
          {pickIssues.map((issue) => (
            <li key={issue.id}>
              <input
                id={`issue-${issue.id}`}
                name={`issue-${issue.id}`}
                type="checkbox"
                checked={issue.checked}
                onChange={() => onClickPickIssue(issue)}
              />
              <label htmlFor={`issue-${issue.id}`}>
                <img
                  src="/assets/icons/ic-checkedissue.svg"
                  alt={`${issue.title}선택`}
                  className={issue.checked ? `on` : ``}
                />
                <span>{issue.title}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className="signup-btn signup"
          type="submit"
          disabled={pickIssues.length <= 0}
        >
          선택완료
        </button>
      </div>
    </div>
  );
}
