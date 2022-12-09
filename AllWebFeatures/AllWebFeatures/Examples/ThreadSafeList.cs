using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllWebFeatures.Examples
{
    class Program
    {
        private static Queue<long> _queue = new();

        private static async Task Writer()
        {
            long i = 0;
            while (true)
            {
                await Task.Delay(10000);
                _queue.Enqueue(i++);
            }
        }

        private static async Task Reader()
        {
            while (true)
            {
                await Task.Delay(100);
                if (_queue.TryDequeue(out var item))
                    Console.WriteLine(item);
            }
        }

        static async Task Main(string[] args)
        {
            var writer = Task.Run(Writer);
            var reader = Task.Run(Reader);
            Console.ReadLine();
            await Task.WhenAll(writer, reader);
            Console.WriteLine("Done!");
        }
    }
}
