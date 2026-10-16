$ffmpeg = "C:\Users\buhre\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Zira Desktop')
$synth.Rate = 1
$synth.Volume = 100

$voiceData = @{
    "voice_1" = "One!"
    "voice_2" = "Two!"
    "voice_3" = "Three!"
    "voice_4" = "Four!"
    "voice_5" = "Five! Excellent!"
    "voice_6" = "Six!"
    "voice_7" = "Seven!"
    "voice_8" = "Eight!"
    "voice_9" = "Nine!"
    "voice_10" = "Ten! Outstanding!"
    "voice_11" = "Eleven!"
    "voice_12" = "Twelve!"
    "voice_13" = "Thirteen!"
    "voice_14" = "Fourteen!"
    "voice_15" = "Fifteen! Superb!"
    "voice_16" = "Sixteen!"
    "voice_17" = "Seventeen!"
    "voice_18" = "Eighteen!"
    "voice_19" = "Nineteen!"
    "voice_20" = "Twenty! Flawless!"
    "voice_25" = "Twenty Five! Brutal!"
    "voice_30" = "Thirty! Godlike!"
    "voice_combo1" = "Excellent!"
    "voice_combo2" = "Outstanding!"
    "voice_combo3" = "Flawless victory!"
    "voice_fight" = "Fight!"
    "voice_fatality" = "Uh ooh!"
}

$tempDir = "src\assets\voice\temp"
if (-not (Test-Path $tempDir)) { New-Item -ItemType Directory -Path $tempDir -Force | Out-Null }
$srcVoiceDir = "src\assets\voice"
$publicVoiceDir = "public\voice"
$unityVoiceDir = "unity\Assets\Audio\Voice"

foreach ($key in $voiceData.Keys) {
    $text = $voiceData[$key]
    $rawWav = "$tempDir\$key.wav"
    $mp3Path = "$srcVoiceDir\$key.mp3"

    # 1. Synthesize Speech with Zira
    $synth.SetOutputToWaveFile($rawWav)
    $synth.Speak($text)

    # 2. Transform into Happy Little Girl voice:
    # - Natural formant and pitch shift (+33%) to match child vocal tract
    # - EQ shaping: trim adult chest resonance, boost sweet treble presence & airy sparkle
    # - Cheerful room ambiance reverb
    # - Clean limiter for broadcast clarity
    $filter = "asetrate=22050*1.33,aresample=44100," +
              "equalizer=f=220:width_type=h:width=100:g=-4," +
              "equalizer=f=3200:width_type=h:width=1000:g=4," +
              "equalizer=f=6500:width_type=h:width=2000:g=3," +
              "aecho=0.85:0.5:28:0.22," +
              "alimiter=limit=0.96:level=true"

    & $ffmpeg -y -i $rawWav -af $filter -codec:a libmp3lame -qscale:a 2 $mp3Path 2>$null

    Copy-Item $mp3Path "$publicVoiceDir\$key.mp3" -Force
    Copy-Item $mp3Path "$unityVoiceDir\$key.mp3" -Force

    Write-Host "Generated Happy Little Girl clip: $key ($text)"
}

$synth.Dispose()
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "All Happy Little Girl announcer clips successfully generated!"
