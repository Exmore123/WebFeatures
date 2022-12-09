using SomeFeaturesProject.Abstract;
using System;
using System.Diagnostics;
using System.Reactive;
using System.Reactive.Linq;
using System.Threading;
using System.Timers;

namespace SomeFeaturesProject.Concreate
{
    public class ReadctiveService : IReadctiveService
    {
        public ReadctiveService()
        {
            //Стандарт
            var progress = new Progress<int>();

            IObservable<EventPattern<int>> progressReports =
                Observable.FromEventPattern<int>(
                    handler => progress.ProgressChanged += handler,
                    handler => progress.ProgressChanged -= handler);
            progressReports.Subscribe(data => Trace.WriteLine("OnNext"));

            //Кастом
            var timer = new System.Timers.Timer(interval: 1000) { Enabled = true };

            IObservable<EventPattern<ElapsedEventArgs>> ticks =
                Observable.FromEventPattern<ElapsedEventHandler, ElapsedEventArgs>(
                    handler => timer.Elapsed += handler,
                    handler => timer.Elapsed -= handler);
            ticks.Subscribe(data => Trace.WriteLine("OnNext"));
        }

        public void Start()
        {
            
        }

        public void Stop()
        {

        }
    }
}
