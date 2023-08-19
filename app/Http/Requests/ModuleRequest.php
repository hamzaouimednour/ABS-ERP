<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModuleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            $slug = 'required|alpha_dash|max:250|unique:modules,slug,' . $this->get('id');
        }else{
            $slug = 'required|alpha_dash|max:250|unique:modules,slug';
        }

        return [
            'name' => 'required|string|max:250',
            'description' => 'nullable|string',
            'slug' => $slug,
            'controller' => 'required|alpha|max:250',
            'permissions' => 'required|array',
            'status' => 'required|numeric',
        ];
    }
}
