'use client'

export default function SystemThemeCheck() {
    // let mode = 'Unknown'

    // if (typeof window !== 'undefined') {
    //     const media = window.matchMedia('(prefers-color-scheme: dark)')
    //     mode = media.matches ? 'Dark' : 'Light'
    // }

    return (
        <div className="p-4">
            System is using:
            {/* <strong>{mode}</strong> mode */}
        </div>
    )
}
