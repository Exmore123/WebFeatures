using Serilog;
using SomeFeaturesProject.Abstract;
using System;

namespace AllWebFeatures.Loggers
{
    public class ReactiveLogger : IReactiveLogger
    {
        private readonly ILogger _logger;

        public ReactiveLogger(ILogger logger)
        {
            _logger = logger;
        }

        public void Info(string message)
        {
            _logger.Information(message);
        }
    }
}
