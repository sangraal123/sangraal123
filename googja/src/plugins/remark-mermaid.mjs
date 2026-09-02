/**
 * ```mermaid のコードフェンスを <pre class="mermaid"> に置き換える remark プラグイン。
 *
 * Starlight は Expressive Code でコードブロックを装飾するため、
 * 何もしないと mermaid の記述がただのソース表示になってしまう。
 * remark（Expressive Code の rehype より前）の段階で html ノードに変えておくと、
 * Expressive Code が触らなくなり、クライアント側の mermaid.js が図として描ける。
 *
 * 実際の描画とテーマ追従は astro.config.mjs の head スクリプトが担当。
 */

const ESCAPES = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
};

const escapeHtml = (value) => value.replace(/[&<>"]/g, (char) => ESCAPES[char]);

export function remarkMermaid() {
	return (tree) => {
		visit(tree);
	};
}

/** mdast を再帰的に歩いて、lang が mermaid の code ノードだけ差し替える。 */
function visit(node) {
	if (!node || !Array.isArray(node.children)) return;

	node.children = node.children.map((child) => {
		if (child.type === 'code' && child.lang === 'mermaid') {
			return {
				type: 'html',
				value: `<pre class="mermaid not-content" data-mermaid-source="${escapeHtml(
					child.value,
				)}">${escapeHtml(child.value)}</pre>`,
			};
		}
		visit(child);
		return child;
	});
}
