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
  let issuesList: Issue[] = [
    { id: 0, title: `장애인` },
    { id: 1, title: `환경` },
    { id: 2, title: `아동학대` },
    { id: 3, title: `성차별` },
    { id: 4, title: `인종차별` },
    { id: 5, title: `노인차별` },
  ];
  issuesList = issuesList.map((issue) => ({ ...issue, checked: false }));
  const [issues, setIssues] = useState<Issue[]>(issuesList);
  const [pickIssues, setPickIssues] = useState<Issue[]>([]);

  const onClickPickIssue = (data: Issue) => {
    setIssues(
      issues.map((issue) =>
        issue.id === data.id ? { ...issue, checked: !issue.checked } : issue,
      ),
    );
    if (!data.checked) setPickIssues([...pickIssues, data]);
    else if (data.checked)
      setPickIssues(pickIssues.filter((issue) => issue.id !== data.id));
  };

  const completePickIssue = () => {
    setSignup({ ...signup, pickIssues });
  };

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
          {issues.map((issue) => (
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
          className={`signup-btn signup${pickIssues.length >= 3 && ` fill`}`}
          type="button"
          disabled={pickIssues.length < 3}
          onClick={completePickIssue}
        >
          선택완료
        </button>
      </div>
    </div>
  );
}
