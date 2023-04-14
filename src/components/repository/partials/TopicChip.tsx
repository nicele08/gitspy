const TopicChip = ({ topic = 'Other' }) => {
  const colors: Record<string, string> = {
    javascript:
      'bg-yellow-500 text-white dark:bg-yellow-400 dark:text-gray-800',
    python:
      'bg-green-500 text-white dark:bg-green-400 dark:text-gray-800',
    react:
      'bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-800',
    css: 'bg-purple-500 text-white dark:bg-purple-400 dark:text-gray-800',
    html: 'bg-red-500 text-white dark:bg-red-400 dark:text-gray-800',
    java: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-gray-800',
    ruby: 'bg-pink-500 text-white dark:bg-pink-400 dark:text-gray-800',
    php: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-gray-800',
    default:
      'bg-gray-500 text-white dark:bg-gray-400 dark:text-gray-800',
  };

  const colorClass = colors[topic.toLowerCase()]
    ? colors[topic.toLowerCase()]
    : colors.default;

  return (
    <div className={`px-2 py-1 rounded-full text-sm ${colorClass}`}>
      {topic}
    </div>
  );
};

export default TopicChip;
