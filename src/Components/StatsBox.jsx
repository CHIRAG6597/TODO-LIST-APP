export default function StatsBox({ completedTasks, totalTasks }) {
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  
    return (
      <div className="stats-box">
        <div>
          <h2>Task Done</h2>
          <p>Keep it up</p>
          <p><strong>{percentage}%</strong> completed</p>
        </div>
        <div className="progress-circle">
          {completedTasks}/{totalTasks}
        </div>
      </div>
    );
  }