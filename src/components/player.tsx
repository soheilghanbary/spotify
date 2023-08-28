import { Icons } from "./icons"

export const Player = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t p-4 dark:border-gray-900 dark:bg-gray-950">
      <section className="grid grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="dark:text-gray-100">
              Bale Ghoorban Putak Ft Pishroo
            </h2>
            <Icons.heart className="h-5 text-rose-400 fill-rose-500 w-5" />
          </div>
          <p>Grimes</p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <Icons.skipBack className="h-4 w-4" />
          <div className="flex items-center justify-center rounded-full p-4 dark:bg-gray-900 bg-gray-100">
            <Icons.play className="h-5 w-5 dark:text-gray-100" />
          </div>
          <Icons.skipForward className="h-4 w-4" />
        </div>
        <div className="flex justify-end">fdsfds</div>
      </section>
    </footer>
  )
}
