const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ backgroundColor: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.time}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="yayayaya">
          {data.link.text}
        </a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;