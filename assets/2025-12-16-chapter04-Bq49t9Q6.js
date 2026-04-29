import{i as e,r as t,s as n,t as r}from"./app-x0wcYh66.js";var i=JSON.parse(`{"path":"/md/project/ai/dk/v1/number/2025-12-16-chapter04.html","title":"第04节：基于多个大模型改写数字人应用（代码版）","lang":"zh-CN","frontmatter":{"title":"第04节：基于多个大模型改写数字人应用（代码版）","pay":"https://articles.zsxq.com/id_3ga8eec58cm9.html"},"git":{"updatedTime":1777449425000,"contributors":[{"name":"binghe001","username":"binghe001","email":"“1028386804@qq.com”","commits":1,"url":"https://github.com/binghe001"}],"changelog":[{"hash":"4753df0e0bd5f7ce249e3dfb944184bcef19278d","time":1777449425000,"email":"“1028386804@qq.com”","author":"binghe001","message":"feature: 升级到vuepress2"}]},"filePathRelative":"md/project/ai/dk/v1/number/2025-12-16-chapter04.md"}`),a={name:`2025-12-16-chapter04.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="《实战ai大模型》ai数字人应用-第04节-基于多个大模型改写数字人应用-代码版" tabindex="-1"><a class="header-anchor" href="#《实战ai大模型》ai数字人应用-第04节-基于多个大模型改写数字人应用-代码版"><span>《实战AI大模型》AI数字人应用-第04节：基于多个大模型改写数字人应用（代码版）</span></a></h1><p>作者：冰河 <br>星球：<a href="http://m6z.cn/6aeFbs" target="_blank" rel="noopener noreferrer">http://m6z.cn/6aeFbs</a><br>博客：<a href="https://binghe.site" target="_blank" rel="noopener noreferrer">https://binghe.site</a><br>文章汇总：<a href="https://binghe.site/md/all/all.html" target="_blank" rel="noopener noreferrer">https://binghe.site/md/all/all.html</a><br>源码获取地址：<a href="https://t.zsxq.com/0dhvFs5oR" target="_blank" rel="noopener noreferrer">https://t.zsxq.com/0dhvFs5oR</a></p><p><strong>大家好，我是冰河~~</strong></p><p>今天，带着大家一起基于CHATTTS + whisper-tiny + qwen3:8b多个大模型改写数字人应用，开始今天的正题。</p><h2 id="一、环境搭建与项目初始化" tabindex="-1"><a class="header-anchor" href="#一、环境搭建与项目初始化"><span>一、环境搭建与项目初始化</span></a></h2><h3 id="_1-1-硬件与系统要求" tabindex="-1"><a class="header-anchor" href="#_1-1-硬件与系统要求"><span>1.1 硬件与系统要求</span></a></h3><ul><li><strong>操作系统</strong>：Ubuntu 22.04 LTS（推荐）或 Windows WSL2</li><li><strong>GPU</strong>：NVIDIA RTX 4090/3090 (24GB显存) 或 RTX 4080/3080 (16GB显存)</li><li><strong>显存要求</strong>：至少16GB，Qwen3:8b需要约10GB，其他模型约2-3GB</li><li><strong>存储空间</strong>：至少50GB可用空间</li><li><strong>内存</strong>：32GB RAM</li></ul><h3 id="_1-2-创建项目目录结构" tabindex="-1"><a class="header-anchor" href="#_1-2-创建项目目录结构"><span>1.2 创建项目目录结构</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建项目主目录</span></span>
<span class="line"><span class="token function">mkdir</span> ~/ai-digital-human <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ~/ai-digital-human</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建完整的目录结构</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>models,src/<span class="token punctuation">{</span>asr,tts,llm,api<span class="token punctuation">}</span>,data/<span class="token punctuation">{</span>audio_input,audio_output<span class="token punctuation">}</span>,logs,configs,docker<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建虚拟环境</span></span>
<span class="line">python3.10 <span class="token parameter variable">-m</span> venv venv</span>
<span class="line"><span class="token builtin class-name">source</span> venv/bin/activate</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建 requirements.txt</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> requirements.txt <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;</span>
<span class="line">torch&gt;=2.0.0</span>
<span class="line">torchaudio&gt;=2.0.0</span>
<span class="line">transformers&gt;=4.36.0</span>
<span class="line">openai-whisper&gt;=20231117</span>
<span class="line">fastapi&gt;=0.104.0</span>
<span class="line">uvicorn[standard]&gt;=0.24.0</span>
<span class="line">pydub&gt;=0.25.1</span>
<span class="line">soundfile&gt;=0.12.1</span>
<span class="line">numpy&gt;=1.24.0</span>
<span class="line">scipy&gt;=1.11.0</span>
<span class="line">pydantic&gt;=2.5.0</span>
<span class="line">websockets&gt;=12.0</span>
<span class="line">python-multipart&gt;=0.0.6</span>
<span class="line">sentencepiece&gt;=0.1.99</span>
<span class="line">accelerate&gt;=0.24.0</span>
<span class="line">einops&gt;=0.7.0</span>
<span class="line">safetensors&gt;=0.4.0</span>
<span class="line">gradio&gt;=4.0.0</span>
<span class="line">langchain&gt;=0.0.350</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装PyTorch（根据CUDA版本选择）</span></span>
<span class="line">pip3 <span class="token function">install</span> torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装其他依赖</span></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-配置系统环境" tabindex="-1"><a class="header-anchor" href="#_1-3-配置系统环境"><span>1.3 配置系统环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 安装系统依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token punctuation">\\</span></span>
<span class="line">    ffmpeg <span class="token punctuation">\\</span></span>
<span class="line">    libsndfile1 <span class="token punctuation">\\</span></span>
<span class="line">    portaudio19-dev <span class="token punctuation">\\</span></span>
<span class="line">    python3-dev <span class="token punctuation">\\</span></span>
<span class="line">    build-essential <span class="token punctuation">\\</span></span>
<span class="line">    git-lfs <span class="token punctuation">\\</span></span>
<span class="line">    nvidia-cuda-toolkit <span class="token punctuation">\\</span></span>
<span class="line">    nvidia-driver-535</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置Git LFS（用于大文件下载）</span></span>
<span class="line"><span class="token function">git</span> lfs <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建模型下载脚本</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> download_models.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;</span>
<span class="line">#!/bin/bash</span>
<span class="line">MODEL_DIR=&quot;models&quot;</span>
<span class="line"></span>
<span class="line"># 创建模型子目录</span>
<span class="line">mkdir -p $MODEL_DIR/{whisper,chattts,qwen}</span>
<span class="line"></span>
<span class="line">echo &quot;开始下载模型文件...&quot;</span>
<span class="line"></span>
<span class="line"># 1. 下载whisper-tiny（自动下载）</span>
<span class="line">echo &quot;准备whisper-tiny模型...&quot;</span>
<span class="line"></span>
<span class="line"># 2. 下载ChatTTS</span>
<span class="line">echo &quot;克隆ChatTTS仓库...&quot;</span>
<span class="line">cd $MODEL_DIR/chattts</span>
<span class="line">git clone https://github.com/2noise/ChatTTS.git</span>
<span class="line">cd ChatTTS</span>
<span class="line">pip install -r requirements.txt</span>
<span class="line"></span>
<span class="line"># 3. 下载Qwen3-8B（使用Hugging Face）</span>
<span class="line">echo &quot;下载Qwen3-8B模型...&quot;</span>
<span class="line">cd ../../$MODEL_DIR/qwen</span>
<span class="line">git clone https://huggingface.co/Qwen/Qwen3-8B-Instruct</span>
<span class="line"></span>
<span class="line">echo &quot;模型下载完成！&quot;</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token function">chmod</span> +x download_models.sh</span>
<span class="line">./download_models.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、核心模型部署" tabindex="-1"><a class="header-anchor" href="#二、核心模型部署"><span>二、核心模型部署</span></a></h2><h3 id="_2-1-部署-whisper-tiny-语音识别" tabindex="-1"><a class="header-anchor" href="#_2-1-部署-whisper-tiny-语音识别"><span>2.1 部署 Whisper-tiny 语音识别</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># src/asr/whisper_asr.py</span></span>
<span class="line"><span class="token function">import</span> whisper</span>
<span class="line"><span class="token function">import</span> numpy as np</span>
<span class="line">from typing <span class="token function">import</span> Optional, Dict</span>
<span class="line"><span class="token function">import</span> torch</span>
<span class="line"><span class="token function">import</span> logging</span>
<span class="line"></span>
<span class="line">class WhisperASR:</span>
<span class="line">    def __init__<span class="token punctuation">(</span>self, model_size: str <span class="token operator">=</span> <span class="token string">&quot;tiny&quot;</span>, device: str <span class="token operator">=</span> <span class="token string">&quot;cuda&quot;</span><span class="token punctuation">)</span>:</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        初始化Whisper ASR模型</span>
<span class="line">        </span>
<span class="line">        Args:</span>
<span class="line">            model_size: 模型大小 <span class="token punctuation">(</span>tiny, base, small, medium, large<span class="token punctuation">)</span></span>
<span class="line">            device: 运行设备 <span class="token punctuation">(</span>cuda 或 cpu<span class="token punctuation">)</span></span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        self.logger <span class="token operator">=</span> logging.getLogger<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span></span>
<span class="line">        self.device <span class="token operator">=</span> device <span class="token keyword">if</span> torch.cuda.is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> and device <span class="token operator">==</span> <span class="token string">&quot;cuda&quot;</span> <span class="token keyword">else</span> <span class="token string">&quot;cpu&quot;</span></span>
<span class="line">        </span>
<span class="line">        self.logger.info<span class="token punctuation">(</span>f<span class="token string">&quot;正在加载Whisper-{model_size}模型到 {self.device}...&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self.model <span class="token operator">=</span> whisper.load_model<span class="token punctuation">(</span>model_size, <span class="token assign-left variable">device</span><span class="token operator">=</span>self.device<span class="token punctuation">)</span></span>
<span class="line">        self.logger.info<span class="token punctuation">(</span><span class="token string">&quot;Whisper模型加载完成！&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># 支持的语言代码映射</span></span>
<span class="line">        self.language_codes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;中文&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zh&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;英语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;en&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;日语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ja&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;韩语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ko&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;法语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;fr&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;西班牙语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;es&quot;</span>,</span>
<span class="line">            <span class="token string">&quot;德语&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;de&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    def transcribe<span class="token punctuation">(</span></span>
<span class="line">        self,</span>
<span class="line">        audio_path: str,</span>
<span class="line">        language: Optional<span class="token punctuation">[</span>str<span class="token punctuation">]</span> <span class="token operator">=</span> None,</span>
<span class="line">        task: str <span class="token operator">=</span> <span class="token string">&quot;transcribe&quot;</span>,</span>
<span class="line">        temperature: float <span class="token operator">=</span> <span class="token number">0.0</span>,</span>
<span class="line">        beam_size: int <span class="token operator">=</span> <span class="token number">5</span>,</span>
<span class="line">        **kwargs</span>
<span class="line">    <span class="token punctuation">)</span> -<span class="token operator">&gt;</span> Dict:</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        转录音频文件</span>
<span class="line">        </span>
<span class="line">        Args:</span>
<span class="line">            audio_path: 音频文件路径</span>
<span class="line">            language: 语言代码 <span class="token punctuation">(</span>zh, en, ja等<span class="token punctuation">)</span></span>
<span class="line">            task: 任务类型 <span class="token punctuation">(</span>transcribe 或 translate<span class="token punctuation">)</span></span>
<span class="line">            temperature: 采样温度</span>
<span class="line">            beam_size: beam search大小</span>
<span class="line">            </span>
<span class="line">        Returns:</span>
<span class="line">            包含转录结果的字典</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        try:</span>
<span class="line">            <span class="token comment"># 加载音频</span></span>
<span class="line">            audio <span class="token operator">=</span> whisper.load_audio<span class="token punctuation">(</span>audio_path<span class="token punctuation">)</span></span>
<span class="line">            audio <span class="token operator">=</span> whisper.pad_or_trim<span class="token punctuation">(</span>audio<span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment"># 生成mel spectrogram</span></span>
<span class="line">            mel <span class="token operator">=</span> whisper.log_mel_spectrogram<span class="token punctuation">(</span>audio, <span class="token assign-left variable">n_mels</span><span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">)</span>.to<span class="token punctuation">(</span>self.model.device<span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment"># 检测语言（如果未指定）</span></span>
<span class="line">            <span class="token keyword">if</span> language is None:</span>
<span class="line">                _, probs <span class="token operator">=</span> self.model.detect_language<span class="token punctuation">(</span>mel<span class="token punctuation">)</span></span>
<span class="line">                language <span class="token operator">=</span> max<span class="token punctuation">(</span>probs, <span class="token assign-left variable">key</span><span class="token operator">=</span>probs.get<span class="token punctuation">)</span></span>
<span class="line">                self.logger.info<span class="token punctuation">(</span>f<span class="token string">&quot;检测到语言: {language}, 置信度: {probs[language]:.2f}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment"># 解码选项</span></span>
<span class="line">            options <span class="token operator">=</span> whisper.DecodingOptions<span class="token punctuation">(</span></span>
<span class="line">                <span class="token assign-left variable">language</span><span class="token operator">=</span>language,</span>
<span class="line">                <span class="token assign-left variable">task</span><span class="token operator">=</span>task,</span>
<span class="line">                <span class="token assign-left variable">temperature</span><span class="token operator">=</span>temperature,</span>
<span class="line">                <span class="token assign-left variable">beam_size</span><span class="token operator">=</span>beam_size,</span>
<span class="line">                <span class="token assign-left variable">fp16</span><span class="token operator">=</span>self.device <span class="token operator">==</span> <span class="token string">&quot;cuda&quot;</span>,</span>
<span class="line">                **kwargs</span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment"># 执行转录</span></span>
<span class="line">            result <span class="token operator">=</span> whisper.decode<span class="token punctuation">(</span>self.model, mel, options<span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment"># 完整转录（带时间戳）</span></span>
<span class="line">            full_result <span class="token operator">=</span> self.model.transcribe<span class="token punctuation">(</span></span>
<span class="line">                audio_path,</span>
<span class="line">                <span class="token assign-left variable">language</span><span class="token operator">=</span>language,</span>
<span class="line">                <span class="token assign-left variable">task</span><span class="token operator">=</span>task,</span>
<span class="line">                <span class="token assign-left variable">temperature</span><span class="token operator">=</span>temperature,</span>
<span class="line">                **kwargs</span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token builtin class-name">return</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> result.text,</span>
<span class="line">                <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> language,</span>
<span class="line">                <span class="token string">&quot;segments&quot;</span><span class="token builtin class-name">:</span> full_result.get<span class="token punctuation">(</span><span class="token string">&quot;segments&quot;</span>, <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>,</span>
<span class="line">                <span class="token string">&quot;confidence&quot;</span><span class="token builtin class-name">:</span> np.exp<span class="token punctuation">(</span>result.audio_features.mean<span class="token punctuation">(</span><span class="token punctuation">)</span>.item<span class="token punctuation">(</span><span class="token punctuation">))</span>,</span>
<span class="line">                <span class="token string">&quot;success&quot;</span><span class="token builtin class-name">:</span> True</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">        except Exception as e:</span>
<span class="line">            self.logger.error<span class="token punctuation">(</span>f<span class="token string">&quot;转录失败: {str(e)}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token builtin class-name">return</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;language&quot;</span><span class="token builtin class-name">:</span> language or <span class="token string">&quot;unknown&quot;</span>,</span>
<span class="line">                <span class="token string">&quot;segments&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,</span>
<span class="line">                <span class="token string">&quot;confidence&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0.0</span>,</span>
<span class="line">                <span class="token string">&quot;success&quot;</span><span class="token builtin class-name">:</span> False,</span>
<span class="line">                <span class="token string">&quot;error&quot;</span><span class="token builtin class-name">:</span> str<span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    def realtime_transcribe<span class="token punctuation">(</span>self, audio_chunk: np.ndarray<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> str:</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        实时转录音频片段</span>
<span class="line">        </span>
<span class="line">        Args:</span>
<span class="line">            audio_chunk: 音频数据数组</span>
<span class="line">            </span>
<span class="line">        Returns:</span>
<span class="line">            转录文本</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        <span class="token comment"># 这里可以扩展为实时转录逻辑</span></span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def translate<span class="token punctuation">(</span>self, audio_path: str, target_lang: str <span class="token operator">=</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> Dict:</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        翻译音频内容</span>
<span class="line">        </span>
<span class="line">        Args:</span>
<span class="line">            audio_path: 音频文件路径</span>
<span class="line">            target_lang: 目标语言代码</span>
<span class="line">            </span>
<span class="line">        Returns:</span>
<span class="line">            翻译结果</span>
<span class="line">        <span class="token string">&quot;&quot;</span>&quot;</span>
<span class="line">        <span class="token builtin class-name">return</span> self.transcribe<span class="token punctuation">(</span>audio_path, <span class="token assign-left variable">task</span><span class="token operator">=</span><span class="token string">&quot;translate&quot;</span>, <span class="token assign-left variable">language</span><span class="token operator">=</span>target_lang<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试脚本</span></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token builtin class-name">:</span></span>
<span class="line">    <span class="token function">import</span> sys</span>
<span class="line">    logging.basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>logging.INFO<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    asr <span class="token operator">=</span> WhisperASR<span class="token punctuation">(</span>model_size<span class="token operator">=</span><span class="token string">&quot;tiny&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># 测试转录</span></span>
<span class="line">    <span class="token keyword">if</span> len<span class="token punctuation">(</span>sys.argv<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>:</span>
<span class="line">        result <span class="token operator">=</span> asr.transcribe<span class="token punctuation">(</span>sys.argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>, <span class="token assign-left variable">language</span><span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        print<span class="token punctuation">(</span>f<span class="token string">&quot;转录结果: {result[&#39;text&#39;]}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        print<span class="token punctuation">(</span>f<span class="token string">&quot;语言: {result[&#39;language&#39;]}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        print<span class="token punctuation">(</span>f<span class="token string">&quot;置信度: {result[&#39;confidence&#39;]:.4f}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    else:</span>
<span class="line">        print<span class="token punctuation">(</span><span class="token string">&quot;请提供音频文件路径&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-部署-qwen3-8b-对话模型" tabindex="-1"><a class="header-anchor" href="#_2-2-部署-qwen3-8b-对话模型"><span>2.2 部署 Qwen3-8B 对话模型</span></a></h3><h2 id="查看完整文章" tabindex="-1"><a class="header-anchor" href="#查看完整文章"><span>查看完整文章</span></a></h2><p>加入<a href="https://public.zsxq.com/groups/48848484411888.html" target="_blank" rel="noopener noreferrer">冰河技术</a>知识星球，解锁完整技术文章、小册、视频与完整代码</p>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};